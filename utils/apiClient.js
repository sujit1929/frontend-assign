// src/lib/api.js

export async function getData(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${url}`);
    }
    return res.json();
}