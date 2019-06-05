import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone () {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log(binaryStr)
    }

    /*
    return (
      <Container>
        <Dropzone accept={['image/jpeg', 'image/gif', 'image/bmp', 'image/png']}
          onDrop={this.onDrop}
          maxSize={4000000}
          name="image"
        >
          {({ getRootProps, getInputProps }) => (
            <section className='container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <Dropbox>
                  <input type="file" {...getInputProps()} />
                </Dropbox>
              </div>
              <aside>
                <ul></ul>
              </aside>
            </section>
          )}
        </Dropzone>
      </Container>
    )
  */

    acceptedFiles.forEach(file => reader.readAsBinaryString(file))
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Dragdrop some files here, or click to select files</p>
    </div>
  )
}

export default MyDropzone
