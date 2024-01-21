export default async function getAllPadsCast() {
  const result = await fetch("http://localhost:5000/podCasts/");
  const contentType = result.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return result.json();
  } else {
    // Handle non-JSON response (e.g., display an error or return null)
    console.error("Invalid or unexpected content type:", contentType);
    return null;
  }
}
