import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const image = searchParams.get('image');

  if (!image || typeof image !== 'string') {
    return new Response("Missing or invalid image parameter", { status: 400 });
  }

  // Decode and validate the image URL
  const imageUrl = decodeURIComponent(image);
  const trustedDomains = [
    'res.cloudinary.com',
  ];

  try {
    const url = new URL(imageUrl);

    if (
      !url.protocol.startsWith('https') ||
      !trustedDomains.some(domain => url.hostname.includes(domain))
    ) {
      return new Response("Invalid image URL", { status: 400 });
    }

    const html = `
      <!DOCTYPE html>
      <html prefix="og: https://ogp.me/ns#" lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bodega Market PnL</title>
          <meta property="og:title" content="Bodega Market PnL">
          <meta property="og:image" content="${imageUrl}">
          <meta property="og:description" content="Check out my Bodega Market performance!">
          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:title" content="Bodega Market PnL">
          <meta name="twitter:image" content="${imageUrl}">
          <meta name="twitter:description" content="Check out my Bodega Market performance!">
        </head>
        <body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #0f0f1a;">
          <img src="${imageUrl}" alt="Bodega Market PnL Screenshot" style="max-width: 100%; height: auto;" />
        </body>
      </html>
    `;

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (err) {
    return new Response("Malformed image URL", { status: 400 });
  }
}

