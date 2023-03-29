const transitions = {
    all0: 'all 0ms ease-in-out',
    all50: 'all 50ms ease-in-out',
    all100: 'all 100ms ease-in-out',
    all150: 'all 150ms ease-in-out',
    all200: 'all 200ms ease-in-out',
    all300: 'all 300ms ease-in-out',
    all500: 'all 500ms ease-in-out',
    all750: 'all 750ms ease-in-out',
    all1000: 'all 1000ms ease-in-out',

    backgroundColor0: 'background-color 0ms ease-in-out',
    backgroundColor50: 'background-color 50ms ease-in-out',
    backgroundColor100: 'background-color 100ms ease-in-out',
    backgroundColor150: 'background-color 150ms ease-in-out',
    backgroundColor200: 'background-color 200ms ease-in-out',
    backgroundColor300: 'background-color 300ms ease-in-out',
    backgroundColor500: 'background-color 500ms ease-in-out',
    backgroundColor750: 'background-color 750ms ease-in-out',
    backgroundColor1000: 'background-color 1000ms ease-in-out',

    borderColor0: 'border-color 0ms ease-in-out',
    borderColor50: 'border-color 50ms ease-in-out',
    borderColor100: 'border-color 100ms ease-in-out',
    borderColor150: 'border-color 150ms ease-in-out',
    borderColor200: 'border-color 200ms ease-in-out',
    borderColor300: 'border-color 300ms ease-in-out',
    borderColor500: 'border-color 500ms ease-in-out',
    borderColor750: 'border-color 750ms ease-in-out',
    borderColor1000: 'border-color 1000ms ease-in-out',

    color0: 'color 0ms ease-in-out',
    color50: 'color 50ms ease-in-out',
    color100: 'color 100ms ease-in-out',
    color150: 'color 150ms ease-in-out',
    color200: 'color 200ms ease-in-out',
    color300: 'color 300ms ease-in-out',
    color500: 'color 500ms ease-in-out',
    color750: 'color 750ms ease-in-out',
    color1000: 'color 1000ms ease-in-out',

    colors0:
        'colors 0ms ease-in-out, background-color 0ms ease-in-out, border-color 0ms ease-in-out, fill 0ms ease-in-out, stroke 0ms ease-in-out, text-decoration-color 0ms ease-in-out',
    colors50:
        'colors 50ms ease-in-out, background-color 50ms ease-in-out, border-color 50ms ease-in-out, fill 50ms ease-in-out, stroke 50ms ease-in-out, text-decoration-color 50ms ease-in-out',
    colors100:
        'colors 100ms ease-in-out, background-color 100ms ease-in-out, border-color 100ms ease-in-out, fill 100ms ease-in-out, stroke 100ms ease-in-out, text-decoration-color 100ms ease-in-out',
    colors150:
        'colors 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out, fill 150ms ease-in-out, stroke 150ms ease-in-out, text-decoration-color 150ms ease-in-out',
    colors200:
        'colors 200ms ease-in-out, background-color 200ms ease-in-out, border-color 200ms ease-in-out, fill 200ms ease-in-out, stroke 200ms ease-in-out, text-decoration-color 200ms ease-in-out',
    colors300:
        'colors 300ms ease-in-out, background-color 300ms ease-in-out, border-color 300ms ease-in-out, fill 300ms ease-in-out, stroke 300ms ease-in-out, text-decoration-color 300ms ease-in-out',
    colors500:
        'colors 500ms ease-in-out, background-color 500ms ease-in-out, border-color 500ms ease-in-out, fill 500ms ease-in-out, stroke 500ms ease-in-out, text-decoration-color 500ms ease-in-out',
    colors750:
        'colors 750ms ease-in-out, background-color 750ms ease-in-out, border-color 750ms ease-in-out, fill 750ms ease-in-out, stroke 750ms ease-in-out, text-decoration-color 750ms ease-in-out',
    colors1000:
        'colors 1000ms ease-in-out, background-color 1000ms ease-in-out, border-color 1000ms ease-in-out, fill 1000ms ease-in-out, stroke 1000ms ease-in-out, text-decoration-color 1000ms ease-in-out',

    fill0: 'fill 0ms ease-in-out',
    fill50: 'fill 50ms ease-in-out',
    fill100: 'fill 100ms ease-in-out',
    fill150: 'fill 150ms ease-in-out',
    fill200: 'fill 200ms ease-in-out',
    fill300: 'fill 300ms ease-in-out',
    fill500: 'fill 500ms ease-in-out',
    fill750: 'fill 750ms ease-in-out',
    fill1000: 'fill 1000ms ease-in-out',

    opacity0: 'opacity 0ms ease-in-out',
    opacity50: 'opacity 50ms ease-in-out',
    opacity100: 'opacity 100ms ease-in-out',
    opacity150: 'opacity 150ms ease-in-out',
    opacity200: 'opacity 200ms ease-in-out',
    opacity300: 'opacity 300ms ease-in-out',
    opacity500: 'opacity 500ms ease-in-out',
    opacity750: 'opacity 750ms ease-in-out',
    opacity1000: 'opacity 1000ms ease-in-out',

    none: 'none',

    shadow0: 'box-shadow 0ms ease-in-out',
    shadow50: 'box-shadow 50ms ease-in-out',
    shadow100: 'box-shadow 100ms ease-in-out',
    shadow150: 'box-shadow 150ms ease-in-out',
    shadow200: 'box-shadow 200ms ease-in-out',
    shadow300: 'box-shadow 300ms ease-in-out',
    shadow500: 'box-shadow 500ms ease-in-out',
    shadow750: 'box-shadow 750ms ease-in-out',
    shadow1000: 'box-shadow 1000ms ease-in-out',

    stroke0: 'stroke 0ms ease-in-out',
    stroke50: 'stroke 50ms ease-in-out',
    stroke100: 'stroke 100ms ease-in-out',
    stroke150: 'stroke 150ms ease-in-out',
    stroke200: 'stroke 200ms ease-in-out',
    stroke300: 'stroke 300ms ease-in-out',
    stroke500: 'stroke 500ms ease-in-out',
    stroke750: 'stroke 750ms ease-in-out',
    stroke1000: 'stroke 1000ms ease-in-out',

    textDecorationColor0: 'text-decoration-color 0ms ease-in-out',
    textDecorationColor50: 'text-decoration-color 50ms ease-in-out',
    textDecorationColor100: 'text-decoration-color 100ms ease-in-out',
    textDecorationColor150: 'text-decoration-color 150ms ease-in-out',
    textDecorationColor200: 'text-decoration-color 200ms ease-in-out',
    textDecorationColor300: 'text-decoration-color 300ms ease-in-out',
    textDecorationColor500: 'text-decoration-color 500ms ease-in-out',
    textDecorationColor750: 'text-decoration-color 750ms ease-in-out',
    textDecorationColor1000: 'text-decoration-color 1000ms ease-in-out',

    transform0: 'transform 0ms ease-in-out',
    transform50: 'transform 50ms ease-in-out',
    transform100: 'transform 100ms ease-in-out',
    transform150: 'transform 150ms ease-in-out',
    transform200: 'transform 200ms ease-in-out',
    transform300: 'transform 300ms ease-in-out',
    transform500: 'transform 500ms ease-in-out',
    transform750: 'transform 750ms ease-in-out',
    transform1000: 'transform 1000ms ease-in-out',
};

export default transitions;
