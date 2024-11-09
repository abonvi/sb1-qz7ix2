import { useState, useEffect, useCallback, useRef } from 'react';

export function useAudio(url?: string) {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!url) {
      setError(true);
      setLoading(false);
      return;
    }

    const audio = new Audio();
    audioRef.current = audio;
    
    const handleCanPlay = () => {
      setLoading(false);
      setError(false);
    };

    const handleError = () => {
      setError(true);
      setPlaying(false);
      setLoading(false);
    };

    const handleEnded = () => {
      setPlaying(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    audio.src = url;
    audio.load();

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, [url]);

  const toggle = useCallback(() => {
    if (!audioRef.current || error || loading) return;
    
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch(() => {
            setError(true);
            setPlaying(false);
          });
      }
    }
  }, [playing, error, loading]);

  return { playing, toggle, error, loading };
}