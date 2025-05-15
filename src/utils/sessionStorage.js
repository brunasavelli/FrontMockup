const isClient = typeof window !== 'undefined';

// Pega informações
export const getSessionsStorage = (key, initialValue) => {
    if (!isClient) return initialValue;

    const stored = sessionStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
}

// Armazena informações
export const setSessionStorage = (key, value) => {
    if (!isClient) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}