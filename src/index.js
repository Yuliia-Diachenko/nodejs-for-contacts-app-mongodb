import { setupServer } from "./server";
import { initMongoConnection } from "./db/initMongoConnection";

const bootstrap = async () => {
    try {
await initMongoConnection();
setupServer();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

bootstrap();
