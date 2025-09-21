import React from "react";

export default function ShoppingLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return <section>
        <h1>Layout demo</h1>
        {children}
    </section>
}