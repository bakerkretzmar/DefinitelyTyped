// Type definitions for redux-socket.io 1.4
// Project: https://github.com/itaylor/redux-socket.io#readme
// Definitions by: Igor Voropaev <https://github.com/snakeego>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="socket.io-client" />

import { Action, Dispatch, Middleware } from "redux";

export interface MiddlewareOptions {
    eventName?: string | undefined;
    execute?:
        | (<S>(action: Action, emitBound: SocketIOClient.Socket, next: Dispatch<S>, dispatch: Dispatch<S>) => any)
        | undefined;
}

export default function createSocketIoMiddleware(
    socket: SocketIOClient.Socket,
    criteria: string | ReadonlyArray<string> | ((type: string, action: Action) => boolean),
    options?: MiddlewareOptions,
): Middleware;
