export type CreateIncomeParams = {
    type: string
    amount: number
    description: string
    baklava: number
}

export type UpdateIncomeParams = {
    type?: string
    amount?: number
    description?: string
    creditCardId?: number
}