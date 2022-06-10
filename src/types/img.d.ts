declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

// Moving this code away from this file results in a module resolution error
declare module '*.pdf' {
    const content: string;
    export default content;
}
