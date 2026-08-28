export class Money {
    private constructor(private readonly cents: number) {}

    static fromString(value: string): Money {
        if (!/^\d+\.\d{2}$/.test(value)) {
            throw new Error('Invalid amount format');
        }

        const [euros, cents] = value.split('.');

        const amountInCents = Number(euros) * 100 + Number(cents);

        if (!Number.isSafeInteger(amountInCents) || amountInCents <= 0) {
            throw new Error('Invalid amount');
        }

        return new Money(amountInCents);
    }
}