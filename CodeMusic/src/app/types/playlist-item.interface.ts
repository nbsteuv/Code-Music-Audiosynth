export interface PlayListItem{
    seconds: number;
    play(soundId: number): void;
}