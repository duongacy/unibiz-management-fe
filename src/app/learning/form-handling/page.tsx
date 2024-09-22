'use client'
import { ImageUpload } from '@/dp__atoms/ImageUpload'
import { useUploadImageMutation } from '@/services/media/upload-image/mutation'
import { cn } from '@/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import zod from 'zod'

const formPayloadSchema = zod.object({
  username: zod.string({ message: 'Username is required' }),
  avatar: zod.string({ message: 'Avatar is required' }),
})
type FormPayload = zod.infer<typeof formPayloadSchema>

export default function Page() {
  const formMethods = useForm<FormPayload>({
    values: formPayloadSchema.parse({ username: '', avatar: '' }),
    resolver: zodResolver(formPayloadSchema),
  })

  const uploadImageMuatation = useUploadImageMutation()
  const changeFile = async (_name: string, blobFile: Blob) => {
    uploadImageMuatation
      .mutateAsync(blobFile)
      .then((rs) => {
        formMethods.setValue('avatar', rs.data?.url || '')
      })
      .catch(() => {})
  }

  const handleSubmit: SubmitHandler<FormPayload> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form
        {...formMethods}
        onSubmit={formMethods.handleSubmit(handleSubmit)}
        className="mx-auto mt-8 flex w-[400px] flex-col gap-8 border p-8"
      >
        <p className="text-center text-3xl font-bold">Form handling</p>
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-8">
          <span>Username:</span>
          <input type="text" {...formMethods.register('username')} />
          <span>Avatar:</span>
          <ImageUpload
            onChangeFile={changeFile}
            isPending={uploadImageMuatation.isPending}
            isSuccess={uploadImageMuatation.isSuccess}
            isError={uploadImageMuatation.isError}
            {...formMethods.register('avatar')}
          />
        </div>
        <button type="submit" className={cn('self-end')}>
          Submit
        </button>
      </form>
    </div>
  )
}
