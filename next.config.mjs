/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/LandingPage',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
