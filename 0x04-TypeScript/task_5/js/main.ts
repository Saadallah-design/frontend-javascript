// creating two interfaces MajorCredits and MinorCredits
interface MajorCredits {
    credits: number;
    _majorBrand: 'major'; // adding a brand property to each interface
}

interface MinorCredits {
    credits: number;
    _minorBrand: 'minor'; // adding a brand property to each interface

}

// creating a function named sumMajorCredits and sumMinorCredits each taking two arguments subject1 and subject2
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, _majorBrand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, _minorBrand: 'minor' };
}