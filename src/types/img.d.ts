declare module "*.svg" {
    const content: any
    export default content
}

declare module "*.png" {
    const content: any
    export default content
}

// Moving this code away from this file results in a module resolution error
declare module "*.pdf" {
    const content: any
    export default content
}