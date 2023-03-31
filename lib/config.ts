if (!process.env.GTAG_ID) {
    throw new Error('Missing GTAG_ID in environment variables');
}

export const { GTAG_ID } = process.env;
