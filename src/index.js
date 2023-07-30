// Definimos un array que contiene mensajes graciosos para los commits.
const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
];

// Definimos una función llamada funnyCommit sin parámetros.
const funnyCommit = () => {
    // Obtenemos un mensaje aleatorio del array 'messages'.
    const message = messages[Math.floor(Math.random() * messages.length)];
    // Imprimimos el mensaje en la consola con un color de texto azul (código de escape ANSI).
    console.log(`\x1b[34m${message}\x1b[89m`);
}

// Exportamos la función funnyCommit para que pueda ser utilizada en otros módulos.
module.exports = {
    funnyCommit
};