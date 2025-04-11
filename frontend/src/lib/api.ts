import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export interface User {
    id: number;
    email: string;
    name: string;
    role: 'intern' | 'company';
}

export interface InternProfile {
    university: string;
    introduction: string;
}

export interface CompanyProfile {
    industry: string;
    description: string;
}

export interface Message {
    id: number;
    content: string;
    created_at: string;
    company?: {
        id: number;
        name: string;
    };
    intern?: {
        id: number;
        name: string;
    };
    sender?: {
        id: number;
        name: string;
    };
    receiver?: {
        id: number;
        name: string;
    };
}

export const auth = {
    register: async (data: { email: string; password: string; name: string; role: 'intern' | 'company' }) => {
        const response = await api.post<User>('/auth/register', { user: data });
        return response.data;
    },

    login: async (data: { email: string; password: string }) => {
        const response = await api.post<{ user: User }>('/auth/login', data);
        return response.data;
    },

    logout: async () => {
        const response = await api.post<{ message: string }>('/auth/logout');
        return response.data;
    },
};

export const profile = {
    get: async () => {
        const response = await api.get<User & { profile: InternProfile | CompanyProfile }>('/profile');
        return response.data;
    },
};

export const messages = {
    list: async () => {
        const response = await api.get<{ messages: Message[] }>('/messages');
        return response.data;
    },

    get: async (id: number) => {
        const response = await api.get<Message>(`/messages/${id}`);
        return response.data;
    },

    create: async (data: { receiver_id: number; content: string }) => {
        const response = await api.post<Message>('/messages', { message: data });
        return response.data;
    },
}; 