'use client'
import { solidButtonClassName } from '@/dp__atoms/Button'
import { api } from '@/services/axios'
import { URLS } from '@/services/urls'
import { cn } from '@/utils/cn'
import React, { useEffect } from 'react'

type FileWithPreview = File & { previewUrl?: string }

export default function Page() {
  const [file, setFile] = React.useState<FileWithPreview | null>(null)
  const [payload, setPayload] = React.useState<{
    username: string
    avatar: string
  }>({ avatar: '', username: '' })

  useEffect(() => {
    return () => {
      file?.previewUrl && URL.revokeObjectURL(file.previewUrl)
    }
  }, [file])

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!!event.target?.files?.length) {
      const newFile = event.target.files![0]
      setFile({
        ...newFile,
        previewUrl: URL.createObjectURL(newFile),
      })

      const blob = new Blob([newFile as BlobPart], {
        type: 'application/octet-stream',
      })

      setPayload({ ...payload, avatar: '' })
      // Upload image to server and get the url
      api
        .upload(URLS.UPLOAD_IMAGE, blob)
        .then((rs) => {
          setPayload({ ...payload, avatar: rs.data.url })
        })
        .catch((error) => {
          setFile(null)
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(payload)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex w-[400px] flex-col gap-8 border p-8"
      >
        <p className="text-center text-3xl font-bold">Form handling</p>
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-8">
          <span>Username:</span>
          <input
            type="text"
            value={payload.username}
            onChange={(e) =>
              setPayload((p) => ({ ...p, username: e.target.value }))
            }
          />
          <span>Avatar:</span>
          <label className="flex min-h-10 items-center border p-2">
            <input
              type="file"
              name="name"
              onChange={handleFileChange}
              className="hidden"
            />
            {file?.previewUrl ? (
              <img
                src={file?.previewUrl}
                alt=""
                className={cn('opacity-30', {
                  'opacity-100': !!payload.avatar,
                })}
              />
            ) : (
              'Select file'
            )}
          </label>
        </div>
        <button
          type="submit"
          className={cn(
            solidButtonClassName({
              disabled: !payload.username || !payload.avatar,
            }),
            'self-end',
          )}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
