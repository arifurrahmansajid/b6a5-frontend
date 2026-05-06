import { cookies } from "next/headers";

type TCookieOptions = {
  path?: string;
  domain?: string;
  maxAge?: number;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "lax" | "strict" | "none";
};

const cookieOptions = (age: number) => {
  const options: TCookieOptions = {
    path: "/",
    maxAge: age,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  };
  return options;
};

const setCookie = async (name: string, value: string, age: number) => {
  try {
    const cookieStore = await cookies();
    const options = cookieOptions(age);

    try {
      cookieStore.set(name, value, options);
      console.debug(
        `✅ [CookieUtil] setCookie success for ${name} (age: ${age}s)`,
      );
    } catch (cookieError) {
      // If we are in a Server Component render, Next.js will throw an error here.
      // We log it but don't rethrow, allowing the app to continue.
      console.warn(
        `⚠️ [CookieUtil] Could not set cookie "${name}" during rendering. This is expected if triggered from a Server Component.`,
      );
    }
  } catch (error) {
    console.error(`❌ [CookieUtil] get cookieStore failed for ${name}:`, error);
    // We don't throw here to prevent crashing the whole render cycle
  }
};

const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
};

const deleteCookie = async (key: string) => {
  const cookieStore = await cookies();
  return cookieStore.delete(key);
};

export const cookieUtils = {
  setCookie,
  getCookie,
  deleteCookie,
  cookieOptions,
};
