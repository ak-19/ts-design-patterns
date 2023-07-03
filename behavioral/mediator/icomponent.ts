export interface IComponent {
    send(componentId: string, event: string): void;
    receive(event: string): void; 
    getId(): string;  
}