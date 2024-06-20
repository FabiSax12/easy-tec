import { getServerSession } from "next-auth"
import { formatDate } from "@/utils"
import { SemestreButton, AddSemesterButton } from "@/components"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { AcademicPeriod } from "@/interfaces/api-data/academic-period"


export const Semestres = async () => {
  const session = await getServerSession(authOptions)
  const res = await fetch(`http://localhost:3000/api/academic-periods/${session?.user.id}`)
  const academicPeriods: AcademicPeriod[] = await res.json()

  return (
    <>
      <div className="grid grid-cols-2 lg:block">
        {academicPeriods && academicPeriods.map((period) => (
          <SemestreButton
            key={period.id}
            id={`${period.type.charAt(0)}-${period.typeId}`}
            title={`${period.type} ${period.typeId}`}
            startDate={formatDate(period.startDate.toString())}
            endDate={formatDate(period.endDate.toString())}
          />
        ))}
        <AddSemesterButton />
      </div>
    </>
  )
}
