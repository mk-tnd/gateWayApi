import { Application } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const setupProxies = (app: Application, routes: any[]) => {
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
}

export default setupProxies;