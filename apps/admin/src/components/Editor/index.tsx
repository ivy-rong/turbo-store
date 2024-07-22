import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { CustomBubbleMenu } from './components'
import { useEffect } from 'react'
import Placeholder from '@tiptap/extension-placeholder'

// const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3]
        }
      }),
      Placeholder.configure({
        placeholder: 'Write something …'
      })
    ],
    content
  })

  useEffect(() => {
    return () => editor?.destroy()
  }, [])
  return (
    <>
      {/* 111 */}
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      <CustomBubbleMenu editor={editor}></CustomBubbleMenu>
    </>
  )
}

export default Tiptap
