import yaml from 'js-yaml'
import resumeRaw from '../data/resume.yaml?raw'

export const loadResume = () => yaml.load(resumeRaw)