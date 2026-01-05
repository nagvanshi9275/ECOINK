import { useState, useEffect } from 'react';

export default function FormattedDate({ date, showTime }: { date: string | Date, showTime?: boolean }) {
    const [formatted, setFormatted] = useState<string>('');

    useEffect(() => {
        const d = new Date(date);
        setFormatted(showTime ? d.toLocaleString() : d.toLocaleDateString());
    }, [date, showTime]);

    // Return an empty span or a placeholder during hydration to avoid mismatch
    if (!formatted) {
        return <span className="opacity-0">{showTime ? '00/00/0000, 00:00:00' : '00/00/0000'}</span>;
    }

    return <span>{formatted}</span>;
}
