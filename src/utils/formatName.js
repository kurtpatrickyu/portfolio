export function formatName(fullName) {
    const parts = fullName.trim().split(" ");

    const first = parts[0]?.toLowerCase() || "";
    const initials = parts
        .slice(1) 
        .map((p) => p.charAt(0).toLowerCase())
        .join("");

    return { first, initials };
}