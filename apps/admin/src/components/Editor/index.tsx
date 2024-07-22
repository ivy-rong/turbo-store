import { useEditor, EditorContent, FloatingMenu, BubbleMenu, type Extension } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { CustomBubbleMenu } from './components'
import { useEffect } from 'react'
import Placeholder from '@tiptap/extension-placeholder'
import './styles/index.css'
// const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content
  })

  // useEffect(() => {
  //   return () => editor?.destroy()
  // }, [])
  return (
    <>
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      <CustomBubbleMenu editor={editor}></CustomBubbleMenu>
    </>
  )
}

export default Tiptap
