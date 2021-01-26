import React, { ReactElement } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps): ReactElement {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" {...props}>
      <Path
        fill="#FEFEFE"
        d="M35.99 17.98c0 9.93-8.06 17.98-18 17.98a17.98 17.98 0 1118-17.98"
      />
      <Path
        fill="#2043B5"
        d="M15.58 27.14c.93 3.33 4.26 5.88 5.94 5.77.06 0 6.38-1.15 9.84-6.75 2.7-4.37 1.77-8.58-1.89-8.67-1.31.09-15.66 3.3-13.9 9.65M28.64 5.77a15.44 15.44 0 00-17.35-1.89c-.22.12-.44.23-.65.36l.05.02c-.64.44-1.19.96-1.64 1.55-4.46 5.9 10.49 10.2 18.48 10.21 3.67 2.64 4.7-7.45 1.11-10.25"
      />
      <Path
        fill="#5493F7"
        d="M12.95 5.52c-2.02 2.97-8.75 5.06-9.86 4.73v-.01A15.64 15.64 0 018.02 4.5c.42-.3.85-.58 1.29-.83.94-.54 1.9-.57 2.22-.58 3 .05 1.44 2.4 1.42 2.43m-1.7 22.24c.15.97 0 4.83-.2 5.15-.18.01-.54.03-1.59-.55a16.75 16.75 0 01-7.58-9.1 16.18 16.18 0 01.18-10.92c1.2 1.58 2.6 3.01 3.78 4.6 1.13 1.53 2.68 4 3 4.53 1.95 3.29 2.26 5.31 2.41 6.29m23.72-9.54c0 2.11-.42 4.13-1.17 5.98-2 2.05-15.42-3.01-15.55-3.07-1.84-.77-7.43-3.13-7.93-6.82-.73-5.32 10.5-9.03 15.43-9.17.6.01 2.4.03 3.44.85a15.95 15.95 0 015.78 12.23m-8.7 14.4c-1.4.67-2.95.18-2.55-1.24.77-2.72 7.5-5.51 8.98-5.66.19-.02.26.1.18.26a16.66 16.66 0 01-6.61 6.63"
      />
    </Svg>
  )
}

export default SvgComponent
