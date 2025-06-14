// Este será o arquivo base para proteger qualquer rota /admin
// utilizando autenticação simples com token ou verificação de e-mail da M2.
// Vamos criar a primeira versão com proteção por domínio de e-mail ("@m2tokenizada.com")

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Verifica se está acessando rota /admin
  if (url.pathname.startsWith("/admin")) {
    const token = req.cookies.get("m2-auth")?.value;
    const email = req.cookies.get("m2-email")?.value;

    if (!token || !email || !email.endsWith("@m2tokenizada.com")) {
      url.pathname = "/acesso-negado";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
