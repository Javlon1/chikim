const { SitemapStream, streamToPromise } = require("sitemap");

const { Readable } = require("stream");

export default async (req, res) => {

    const links = [
        { url: "/", changefreq: "daily", priority: 1 },
        { url: "/add", changefreq: "daily", priority: 1 },
        { url: "/categories", changefreq: "daily", priority: 1 },
        { url: "/general", changefreq: "daily", priority: 1 },
        { url: "/month", changefreq: "daily", priority: 1 },
        { url: "/password-confirm", changefreq: "daily", priority: 1 },
        { url: "/password-reset-form", changefreq: "daily", priority: 1 },
        { url: "/password-reset", changefreq: "daily", priority: 1 },
        { url: "/register-success", changefreq: "daily", priority: 1 },
        { url: "/register", changefreq: "daily", priority: 1 },
        { url: "/setting", changefreq: "daily", priority: 1 },
    ];

    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlStrina = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlStrina)
}