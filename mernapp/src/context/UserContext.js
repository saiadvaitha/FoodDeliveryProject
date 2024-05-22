import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from API or local storage
        const fetchUserData = async () => {
            // Example fetch from local storage or API
            const userData = await fetchUserFromAPI();
            setUser(userData);
        };
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

// Fetch user function (Example)
const fetchUserFromAPI = async () => {
    // Replace with actual fetch logic, here is a mock example
    return { email: 'example@example.com' };
};

export { UserContext, UserProvider };
