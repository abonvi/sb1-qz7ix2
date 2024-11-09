// Create a beep sound using Web Audio API
export const createBeep = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = 'sine';
  oscillator.frequency.value = 800;
  gainNode.gain.value = 0.1;

  return { oscillator, audioContext, gainNode };
};

export const playBeep = () => {
  const { oscillator, audioContext, gainNode } = createBeep();
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.15);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      gainNode.disconnect();
      resolve();
    }, 150);
  });
};