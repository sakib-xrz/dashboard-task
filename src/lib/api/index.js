export async function getArt() {
    const res = await fetch("https://64d734d02a017531bc130976.mockapi.io/art");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
