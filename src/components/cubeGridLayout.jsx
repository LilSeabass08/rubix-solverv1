// File is meant to set the display of the cube grid built from gridFace.tsx
// White on top, orange, green, red, blue (left-right middle), yellow bottom 3x3 grid for each face.

import GridFace from "./gridFace";

export default function GridLayout({cubeData, onStickerClick}) {
    return(
        <div className="grid-layout">
            <div className="face-f">
                <GridFace 
                face="F"
                stickers={cubeData.F}
                onStickerClick={onStickerClick}
                />
            </div>
            <div className="face-r">
                <GridFace 
                face="R"
                stickers={cubeData.R}
                onStickerClick={onStickerClick}
                />
            </div>
            <div className="face-l">
                <GridFace 
                face="L"
                stickers={cubeData.L}
                onStickerClick={onStickerClick}
                />
            </div>
            <div className="face-u">
                <GridFace 
                face="U"
                stickers={cubeData.U}
                onStickerClick={onStickerClick}
                />
            </div>
            <div className="face-d">
                <GridFace 
                face="D"
                stickers={cubeData.D}
                onStickerClick={onStickerClick}
                    />
            </div>
            <div className="face-b">
                <GridFace 
                    face="B"
                    stickers={cubeData.B}
                    onStickerClick={onStickerClick}
                />
            </div>
        </div>
    )
}