'use client'
import { cn } from '@/utils/cn'
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react'

interface ImageUploadProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  onChangeFile?: (fileName: string, blobFile: Blob) => void
  isPending?: boolean
  isError?: boolean
  isSuccess?: boolean
}

export type FileWithPreview = File & {
  preview: string
}

export const ImageUpload = ({
  type,
  label,
  onChange,
  onChangeFile,
  isPending,
  isError,
  isSuccess,
  ...props
}: ImageUploadProps) => {
  const [file, setFile] = useState<FileWithPreview | null>(null)

  useEffect(() => {
    return () => {
      if (file?.preview) {
        URL.revokeObjectURL(file.preview)
      }
    }
  }, [file])

  const handleChangeImage = (e) => {
    if (e.target.files.length === 0) return
    const newFile: FileWithPreview = e.target.files[0]
    newFile.preview = URL.createObjectURL(newFile)
    setFile(newFile)

    const blob = new Blob([newFile as BlobPart], {
      type: 'application/octet-stream',
    })

    onChangeFile?.(newFile.name, blob)
  }

  return (
    <div>
      {label && <label>{label}</label>}
      <label
        className={cn(
          'aspect-square relative flex h-48 overflow-hidden border border-dashed border-neutral-500',
          {
            'opacity-40': isPending,
            'border-red-500': isError,
            'border-green-500': isSuccess,
          },
        )}
      >
        {file?.preview && (
          <img src={file.preview} className="absolute inset-0 object-fill" />
        )}
        {file?.name ? (
          <span>{file?.name}</span>
        ) : (
          <span>Please select image</span>
        )}
        <input
          type="file"
          {...props}
          className="hidden"
          onChange={handleChangeImage}
        />
      </label>
    </div>
  )
}
