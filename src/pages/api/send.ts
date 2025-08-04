import type { APIRoute } from "astro";
import { Resend } from "resend";

// Ensure this API route runs on the server
export const prerender = false;

const EMAIL_FROM = "onboarding@resend.dev";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Generates an idempotency key for the expense reviewer waitlist based on the provided email.
 * The key is prefixed with "expense-reviewer-waitlist-" and truncated to a maximum of 256 characters.
 *
 * @param email - The email address to include in the idempotency key.
 * @returns A string representing the idempotency key, with a maximum length of 256 characters.
 */
const generateIdempotencyKey = (email: string): string => {
  return `expense-reviewer-waitlist-${email}`.substring(0, 256); // Max 256 chars
};

const validateEmail = (
  email: string
): { isValid: boolean; error?: string; data: { email: string } } => {
  // Validate email
  if (!email || typeof email !== "string") {
    return {
      isValid: false,
      error: "Email is required",
      data: {
        email,
      },
    };
  }

  const trimmedEmail = email.trim().toLowerCase();

  // Validate email format
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return {
      isValid: false,
      error: "Please enter a valid email address",
      data: { email: trimmedEmail },
    };
  }

  return {
    isValid: true,
    data: { email: trimmedEmail },
  };
};

const validateApiKey = (): Response | null => {
  if (!import.meta.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is missing");
    return new Response(
      JSON.stringify({
        success: false,
        error: "Service configuration error. Please contact support.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return null;
};

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check for API key first
    const apiKeyError = validateApiKey();
    if (apiKeyError) {
      return apiKeyError;
    }

    // Initialize Resend with the API key
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const data = await request.json();
    const { email } = data;

    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: emailValidation.error,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Send welcome email
    await resend.emails.send(
      {
        from: EMAIL_FROM,
        to: emailValidation.data.email,
        subject: "Hey there! Welcome to the ExpenseAI wait list",
        html: "<p>Your wait list signup was successful!</p>",
      },
      {
        idempotencyKey: generateIdempotencyKey(emailValidation.data.email),
      }
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully joined the wait list!",
        data: {
          email: emailValidation.data.email,
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Wait list API error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
