"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { name: "Strona Główna", path: "/" },
    { name: "Fotografia", path: "/fotografia" },
    { name: "Film", path: "/film" },
    { name: "O Nas", path: "/o-nas" },
    { name: "Kontakt", path: "/kontakt" },
];

export default function AppHeader () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            >
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">

                        <div className="flex justify-between items-center w-[200px] gap-10">

                            <div className="relative">

                            <div className="flex border border-accent/70 p-3">
                                    <span className="tracking-[0.2em]">PR</span>
                                <div style={{transitionDelay: "20ms"}} className="transition-transform absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white animate-pulse" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white animate-pulse"/>
                            </div>
                        </div>
                            <div>                                <p>sasdadsasdasdadsasd</p>
                            </div>

                        </div>
                        <ul className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className={`nav-link text-sm font-body font-light tracking-widest uppercase ${
                                            location.pathname === link.path ? "active text-foreground" : ""
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                    className="absolute inset-0 bg-background/95 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                />

                <div
                    className={`absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-border/50 transition-transform duration-500 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col h-full pt-24 px-8">
                        <nav className="flex-1">
                            <ul className="space-y-6">
                                {navLinks.map((link, index) => (
                                    <li
                                        key={link.path}
                                        className={`transform transition-all duration-500 ${
                                            isOpen
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-8 opacity-0"
                                        }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        {/*<Link*/}
                                        {/*    className={`block text-2xl font-display tracking-wide transition-colors hover:text-accent ${*/}
                                        {/*        location.pathname === link.path*/}
                                        {/*            ? "text-accent"*/}
                                        {/*            : "text-foreground/80"*/}
                                        {/*    }`}*/}
                                        {/*>*/}
                                        {/*    {link.name}*/}
                                        {/*</Link>*/}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};