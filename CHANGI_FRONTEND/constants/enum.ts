export const RECORDING = {
    GRANTED: 'granted'
};

export const FORM_DATA = {
    FORM_DATA_FILE: 'file',
    FORM_DATA_NAME: 'recording.m4a',
    FORM_DATA_TYPE: 'audio/m4a',
    FORM_DATA_MODEL: 'whisper-1',
    FORM_DATA_LANGUAGE: 'en' 
}

export const DIRECTION = {
    URL: process.env.EXPO_PUBLIC_CHANGI_BACKEND_URL,
    AUTHORIZATION: `${process.env.EXPO_PUBLIC_CHANGI_BACKEND_API_KEY}`,
    CONTENT_TYPE: 'application/json',
}

export const OPENAI = {
    URL: process.env.EXPO_PUBLIC_OPENAI_API_URL,
    AUTHORIZATION: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
    CONTENT_TYPE: 'multipart/form-data',
}
