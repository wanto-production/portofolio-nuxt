// composables/zodValidator.ts
import type { FormErrors } from '@vorms/core'
import type { ZodSchema } from 'zod'

export function useZodValidator<T extends Record<string, any>>(
  schema: ZodSchema<T>
) {
  return async (values: T): Promise<FormErrors<T> | void> => {
    const result = schema.safeParse(values)
    if (!result.success) {
      const errors: FormErrors<T> = {} as FormErrors<T>
      for (const issue of result.error.issues) {
        const path = issue.path[0] as keyof T
        if (path) {
          //@ts-ignore
          errors[path] = issue.message
        }
      }
      return errors
    }
  }
}
