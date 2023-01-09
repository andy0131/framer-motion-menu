export default function NestedLayout({children}) {
  return (
    <>
      <div className="nested-layout my-6">
        <div className="relative mx-2 -mb-2 w-fit bg-white px-2 text-sm leading-none text-slate-400 ">
          NestedLayout Start
        </div>
        <div className="border-2 border-slate-200 p-10">{children}</div>
        <div className="relative mx-2 -mt-2 w-fit bg-white px-2 text-sm leading-none text-slate-400">
          NestedLayout End
        </div>
      </div>
    </>
  )
}
