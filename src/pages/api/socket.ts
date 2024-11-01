import { Server as HTTPServer } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { Server as IOServer } from 'socket.io';

const SocketHandler = (req: NextApiRequest, res: NextApiResponse) => {
    // Ensure that socket and server are defined before accessing them
    if (!res.socket) {
        throw new Error("Socket is not defined");
    }

    const socket = res.socket as any; // Type assertion to handle server as part of socket
    
    if (!socket.server.io) {
        const httpServer: HTTPServer = socket.server as any;
        const io = new IOServer(httpServer, {
            path: '/api/socket',
            // Other socket.io options
        });

        // Attach io instance to the server so it's only initialized once
        socket.server.io = io;
    }

    res.end();
};

export default SocketHandler;
