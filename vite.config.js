import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    base: "/Flowers/",

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import "@/styles/base/_mixins.scss";
          @import "@/styles/base/_variables.scss";
        `,
            },
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                home: path.resolve(__dirname, 'index.html'),
                delivery: path.resolve(__dirname, './src/pages/delivery.html'),
                cart: path.resolve(__dirname, './src/pages/cart.html'),
                favorites: path.resolve(__dirname, './src/pages/favorites.html'),
                government: path.resolve(__dirname, './src/pages/government.html'),
                payment: path.resolve(__dirname, './src/pages/payment.html'),
                product: path.resolve(__dirname, './src/pages/product.html'),
                deliveryDate: path.resolve(__dirname, './src/pages/delivery-date.html'),
                news: path.resolve(__dirname, './src/pages/news.html'),
                "404": path.resolve(__dirname, './src/pages/404.html'),
                "news-item": path.resolve(__dirname, './src/pages/news-item.html'),
                contacts: path.resolve(__dirname, './src/pages/contacts.html'),
                checkout: path.resolve(__dirname, './src/pages/checkout.html'),
            },
            output: {
                entryFileNames: 'scripts/[name].[hash].js',
                chunkFileNames: 'scripts/[name].[hash].js',
                assetFileNames: ({name}) => {
                    if (name?.endsWith('.css')) {
                        return 'css/[name].[hash][extname]'
                    }
                    return 'assets/[name].[hash][extname]'
                },
            },
        },
    },
});