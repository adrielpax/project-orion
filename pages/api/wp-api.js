const WP_API_URL = "http://localhost:8000/wp-json";

export async function login(username, password) {
  const res = await fetch(`${WP_API_URL}/jwt-auth/v1/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Erro no login");
  return res.json(); // retorna token
}

export async function getPageBySlug(slug) {
  const res = await fetch(`${WP_API_URL}/wp/v2/pages?slug=${slug}`);
  const [page] = await res.json();
  return page;
}

export async function getProtectedData(token) {
  const res = await fetch(`${WP_API_URL}/wp/v2/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
