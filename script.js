body {
    background-color: #ffdeeb;
    font-family: 'Pixelify Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
}

/* Animations */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.hidden { display: none !important; }

/* Envelope Screen */
#envelope-container {
    text-align: center;
    cursor: pointer;
}

#envelope {
    width: 200px;
    animation: pulse 1.5s infinite ease-in-out;
}

/* Letter Screen */
.letter-window {
    background: white;
    padding: 40px;
    border-radius: 20px;
    border: 8px solid #ff4d6d;
    text-align: center;
    box-shadow: 0 10px 0 #ff4d6d;
    max-width: 400px;
}

#cat-img {
    width: 200px;
    margin: 20px 0;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    height: 60px;
}

button {
    font-family: 'Pixelify Sans', sans-serif;
    font-size: 20px;
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    transition: transform 0.2s ease;
}

#yes-btn {
    background-color: #4CAF50;
    color: white;
    z-index: 10; /* Keeps Yes on top */
}

#no-btn {
    background-color: #f44336;
    color: white;
}

#no-wrapper {
    position: relative;
}