// Edge-compatible JWT decoding (bypasses node crypto for middleware)
const decodeTokenEdge = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

const verifyTokenEdge = (token: string) => {
  const decoded = decodeTokenEdge(token);
  if (!decoded) {
    return { success: false, message: 'Invalid token payload' };
  }
  
  // Basic expiration check
  if (decoded.exp && Date.now() >= decoded.exp * 1000) {
    return { success: false, message: 'Token expired' };
  }

  return { success: true, data: decoded };
};

export const jwtUtils = {
  verifyToken: verifyTokenEdge,
  decodeToken: decodeTokenEdge,
};
