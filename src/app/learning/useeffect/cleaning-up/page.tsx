'use client'

import Markdown from 'markdown-to-jsx'
import { ChangeEventHandler, useEffect, useState } from 'react'

export default function Page() {
  const [oldPreviewUrl, setOldPreviewUrl] = useState<string | null>('')
  const [previewUrl, setPreviewUrl] = useState<string | null>('')

  const onChangeImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.length) {
      const url = URL.createObjectURL(e.target.files[0])
      setPreviewUrl(url)
    }
  }

  useEffect(() => {
    return () => {
      previewUrl && URL.revokeObjectURL(previewUrl)
      setOldPreviewUrl(previewUrl)
    }
  }, [previewUrl])

  // markdown
  const str = `
# Main features
1. Upload image then preview it and create blob url
2. Upload new image to replace the old one
3. Revoke the old blob url
4. Check the old and new blob url
`
  return (
    <div>
      <div className="no-twp font-Source_Code_Pro">
        <Markdown options={{ wrapper: 'article', forceBlock: true }}>
          {str}
        </Markdown>
      </div>
      <div className="mt-4 min-h-40 border p-2">
        <input type="file" onChange={onChangeImage} />
        {previewUrl && (
          <>
            <img src={previewUrl} width={100} height={100} />
          </>
        )}
        <div className="flex gap-1">
          {oldPreviewUrl && (
            <a href={oldPreviewUrl} target="_blank" className="border">
              Old blob file
            </a>
          )}
          {previewUrl && (
            <a href={previewUrl} target="_blank" className="border">
              Current blob file
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
