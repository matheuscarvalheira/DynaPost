'use client';

import { AuthProvider } from "@/contexts/auth-context";
import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyled } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <GlobalStyled />
              {children}
            </AuthProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
