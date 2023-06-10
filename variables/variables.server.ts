import { LinkListType } from "~~/types/types.server";
import { WebSocket, Server } from "ws";

export const wsInstance: { value: Server<WebSocket> | null } = { value: null };

export const sockets: any[] = [];

export const userList = [];

export const linkList: LinkListType[] = [
  /**
   * {
   *    href,
   *    attempts: [
   *        {
   *            ip_address,
   *            device_type,
   *            ...others,
   *        }
   *    ]
   * }
   */
];
